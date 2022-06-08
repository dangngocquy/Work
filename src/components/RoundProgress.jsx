import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

function RoundProgress() {
    const RoundProgress = {
        percent: 60, // is require
        colorSlice: "#fff",
        colorCircle: "#a19f9d",
        fontColor: "#365b74",
        fontSize: "14px",
        fontWeight: 400,
        size: 150,
        stroke: 10,
        strokeBottom: 8,
        speed: 60,
        cut: 0,
        unit: "%",
        round: true,
        number: true,
        linearGradient: ["#0078d4", "#0078d4"]
};
	return(
		<>
            <CircularProgressBar {...RoundProgress} />
		</>
	)
}
export default RoundProgress;