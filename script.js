function toggleDetail(id) {
    const detail = document.getElementById(`detail-${id}`);
    if (detail.style.display === "block") {
        detail.style.display = "none";
    } else {
        detail.style.display = "block";
    }
}
