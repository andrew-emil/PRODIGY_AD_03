import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	clockContainer: {
		width: "50%",
		position: "absolute",
		top: "30%",
		alignItems: "space-around",
		justifyContent: "space-around",
		flexDirection: "row",
	},
	clock: {
		color: "#FFF",
		fontSize: 50,
		marginBottom: 20
	},
	buttonContainer: {
		alignItems: "space-around",
		justifyContent: "space-around",
		flexDirection: "row",
	},
	button: {
		backgroundColor: "#146EBE",
		height: 70,
		width: 70,
		borderRadius: 70,
		alignItems: "space-around",
		justifyContent: "space-around",
		paddingRight: 13,
		margin: 10,
	},
});