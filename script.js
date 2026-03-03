document.getElementById("result").innerHTML = `
<div class="result-card">
<img src="https://loremflickr.com/800/500/${animal}" alt="${animal}">
<h2>${data.title}</h2>
<p>${data.extract}</p>
<h3>🧠 AI Quick Facts</h3>
<p>This animal belongs to the natural wildlife ecosystem and plays an important role in maintaining ecological balance. Scientists study it to understand biodiversity and environmental adaptation.</p>
</div>
`;
