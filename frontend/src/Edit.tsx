// // 1.
// import { useForm } from "react-hook-form";
// import axios from "axios";

// export default function Edit(props: { id: number; setTimers: (arg0: any) => void; timers: any[]; }) {
//     // 2.
//     // eslint-disable-next-line
//     const { register, handleSubmit } = useForm();

//     // 3.
//     // eslint-disable-next-line
//     const onSubmit = (data: { [x: string]: any; }) => {
//         data["id"] = props.id; //add the id from props
//         updateTimer(data);
//     };

//     // This will update existing data with new submitted values
//     const updateTimer = (data: any) => {
//         axios.put("http://localhost:5000/timer", data).then((res) => {
//             // 4.
//             props.setTimers(
//                 props.timers.map((item: { id: number; project: string; issue: string; agent: string; time: string; seconds: number; start: string; end: string;}) => {
//                     return item.id === props.id ? {
//                         id: item.id,
//                         project: item.project,
//                         issue: item.issue,
//                         agent: item.agent,
//                         time: item.time,
//                         seconds: item.seconds,
//                         start: item.start,
//                         end: item.end,
//                     }
//                         : item;
//                 })
//             );
//         });
//     };
// }