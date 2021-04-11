function start() {
  const generation1 = document.getElementById('generation-1');
  const currentGenerationTitle = document.getElementById('generation-number');
  const result = document.getElementById('result');

  currentGenerationTitle.innerText = 'Hello';
  result.innerHTML = generation1.value;
}
