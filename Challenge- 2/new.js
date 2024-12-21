const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyDm-ogFR47rNUdX8aXFKYuXWL7TytpipRo");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
async function run(prompt) {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
}

const receive = run("Write a story about a magic backpack.");