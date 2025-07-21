export const hello = async (name) => {
  const currentTime = new Date().toLocaleTimeString();
  return `<p>Hello ${name} 😊, We can edit this and see, to see the changes live in the browser. ${currentTime}</p>`;
};