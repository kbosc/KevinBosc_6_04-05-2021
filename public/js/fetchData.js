(async () => {
  const res = await fetch("./json/data.json");
  if (!res.ok) {
    throw new Error("Impossible de fetch");
  }
  const data = await res.json();
  onFetchData.data = data;
  document.dispatchEvent(onFetchData);
})();
