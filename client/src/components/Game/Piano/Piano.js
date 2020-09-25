import React, { useState, useEffect, useRef } from "react";
import classes from "./Piano.module.css";
import { Sampler } from "tone";
import pianoNotes from "../../../assets/notes";

const Piano = props => {
	const [loaded, setLoaded] = useState(false);
	const sampler = useRef(null);

	useEffect(() => {
		sampler.current = new Sampler(pianoNotes, {
			onload: () => {
				setLoaded(true);
			},
      }).toMaster();
	}, []);

	const playNote = note => {
		if (loaded) {
			sampler.current.triggerAttackRelease(note, "1.5n");
		}
	};

	return (
		<div className={classes.Piano}>
			<div className={classes.WhiteKey} onClick={() => playNote(`C${props.octave}`)}></div>
			<div className={classes.BlackKey} onClick={() => playNote(`C#${props.octave}`)}></div>
			<div className={classes.WhiteKey} onClick={() => playNote(`D${props.octave}`)}></div>
			<div className={classes.BlackKey} onClick={() => playNote(`D#${props.octave}`)}></div>
			<div className={classes.WhiteKey} onClick={() => playNote(`E${props.octave}`)}></div>
			<div className={classes.WhiteKey} onClick={() => playNote(`F${props.octave}`)}></div>
			<div className={classes.BlackKey} onClick={() => playNote(`F#${props.octave}`)}></div>
			<div className={classes.WhiteKey} onClick={() => playNote(`G${props.octave}`)}></div>
			<div className={classes.BlackKey} onClick={() => playNote(`G#${props.octave}`)}></div>
			<div className={classes.WhiteKey} onClick={() => playNote(`A${props.octave}`)}></div>
			<div className={classes.BlackKey} onClick={() => playNote(`A#${props.octave}`)}></div>
			<div className={classes.WhiteKey} onClick={() => playNote(`B${props.octave}`)}></div>
		</div>
	);
};

export default Piano;
