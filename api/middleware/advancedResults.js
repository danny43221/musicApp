
const advanvedResults = (model, populate) => async (req, res, next) => {
   let query;

   //copy req.query
   const reqQuery = {...req.query}

   //Fields to exclude
   const removeFields = ['select', 'sort', 'page', 'limit']

   //Loop over removeFields and delete them from reqQuery
   removeFields.forEach(param => delete reqQuery[param])

   //Create query string
   let queryStr = JSON.stringify(reqQuery)

   //Create operators
   queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`)

   //Finding resource
   query = model.find(JSON.parse(queryStr))

   //Select fields
   if (req.query.select)  {
      const fields = req.query.select.split(',').join(' ')
      query = query.select(fields)
   }

   //Sort
   if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ')
      query = query.sort(sortBy)
   } else {
      query = query.sort('-stats.skill')
   }

   //Pagination
   const page = parseInt(req.query.page, 10) || 1
   const limit = parseInt(req.query.limit, 10) || 25
   const startIndex = (page - 1) * limit
   const total = await model.countDocuments(JSON.parse(queryStr))

   query = query.skip(startIndex).limit(limit)

   if (populate) {
      query = query.populate(populate)
   }

   //Executing query
   const results = await query

   //Pagination results
   const pagination = {
      limit,
      totalPages: Math.ceil(total / limit)
   }

   res.advancedResults = {
      success: true,
      count: total,
      pagination,
      data: results
   }

   next()
}

module.exports = advanvedResults;