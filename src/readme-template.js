module.exports = (promptData) => {
  //destruct object for easier use
  const { projectName, ...theRest } = promptData;
  return `## ${projectName}
<br><br>
${theRest};
`
};