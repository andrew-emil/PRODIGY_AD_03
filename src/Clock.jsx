import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles/GlobalStyles";
import reset from "./icons/reset.png";
import play from "./icons/play.png";
import pause from "./icons/pause.png";

const Clock = () => {
	const [millisec, setMilliSec] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const formatTime = (milliseconds) => {
		const elapsedTime = milliseconds; // Account for ongoing time
		const seconds = Math.floor(elapsedTime / 1000) % 60;
		const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
		const remainingMilliseconds = elapsedTime % 1000;

		return `${minutes.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}:${remainingMilliseconds.toString().padStart(2, "0")}`;
	};

	const startStopTimer = () => {
		setIsActive(!isActive);
	};

	const resetTimer = () => {
		setIsActive(false);
		setMilliSec(0);
	};

	useEffect(() => {
		let interval;
		if (isActive) {
			interval = setInterval(() => {
				setMilliSec((prevMillisec) => prevMillisec + 10);
			}, 10);
		}

		return () => clearInterval(interval);
	}, [isActive]);

	return (
		<>
			<View style={styles.clockContainer}>
				<Text style={styles.clock}>{formatTime(millisec)}</Text>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={startStopTimer}>
					{isActive ? (
						<Image
							source={pause}
							defaultSource={require("./icons/pause.png")}
							style={{
								backgroundColor: "#146EBE",
								height: 45,
								width: 45,
							}}
						/>
					) : (
						<Image
							source={play}
							defaultSource={require("./icons/play.png")}
							style={{
								backgroundColor: "#146EBE",
								height: 45,
								width: 45,
							}}
						/>
					)}
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={resetTimer}>
					<Image
						source={reset}
						defaultSource={require("./icons/reset.png")}
						style={{
							backgroundColor: "#146EBE",
							height: 45,
							width: 45,
						}}
					/>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default Clock;
