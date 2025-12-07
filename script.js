function toggleDetail(id) {
    const detail = document.getElementById(`detail-${id}`);
    detail.style.display =
        detail.style.display === "block" ? "none" : "block";
}
