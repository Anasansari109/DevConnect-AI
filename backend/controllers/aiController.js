export const improveText = async (req, res) => {
  const { text } = req.body;

  // simple improvement logic
  const improved =
    text.charAt(0).toUpperCase() + text.slice(1) + ".";

  res.json({
    improved,
  });
};

// import OpenAI from "openai";

// export const improveText = async (req, res) => {
//   try {
//     // 🔹 input lo
//     const { text } = req.body;

//     // 🔹 validation
//     if (!text || text.trim() === "") {
//       return res.status(400).json({
//         message: "Text is required",
//       });
//     }

//     // 🔹 OpenAI client
//     const client = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//     });

//     // 🔹 AI call
//     const response = await client.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content: "You are a professional writing assistant.",
//         },
//         {
//           role: "user",
//           content: `Improve the following text professionally and correct grammar:\n\n${text}`,
//         },
//       ],
//       temperature: 0.7,
//     });

//     // 🔹 safe response extract
//     const improvedText =
//       response.choices?.[0]?.message?.content || "No response";

//     // 🔹 send response
//     res.json({
//       improved: improvedText,
//     });

//   } catch (error) {
//     console.error("AI ERROR:", error.message);

//     res.status(500).json({
//       message: "AI error",
//       error: error.message,
//     });
//   }
// };

// // import OpenAI from "openai";

// // const client = new OpenAI({
// //   apiKey: process.env.OPENAI_API_KEY,
// // });

// // export const improveText = async (req, res) => {
// //   const { text } = req.body;

// //   res.json({
// //     improved: text.toUpperCase(),
// //   });
// // };
// // export const improveText = async (req, res) => {
// //   try {
// //     const { text } = req.body;

// //     if (!text) {
// //       return res.status(400).json({ message: "Text is required" });
// //     }

// //     const response = await client.chat.completions.create({
// //       model: "gpt-4o-mini",
// //       messages: [
// //         {
// //           role: "user",
// //           content: `Improve this text professionally and correct grammar:\n\n${text}`,
// //         },
// //       ],
// //     });

// //     res.json({
// //       improved: response.choices[0].message.content,
// //     });

// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).json({ message: "AI error" });
// //   }
// // };

// import OpenAI from "openai";

// export const improveText = async (req, res) => {
//   try {
//     const client = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//     });

//     const { text } = req.body;

//     const response = await client.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: `Improve this text: ${text}`,
//         },
//       ],
//     });

//     res.json({
//       improved: response.choices[0].message.content,
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "AI error" });
//   }
// };