const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then (res => res.json())
    
}