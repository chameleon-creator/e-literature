// Function to play music after the user interacts with the page
function playMusicOnFirstInteraction() {
    const music = document.getElementById('bg-music');
    music.volume = 0.3; // Set a soft volume
    music.play().catch(error => {
        // Autoplay was prevented, which is common. We'll wait for a click.
        console.log("Autoplay prevented. Waiting for user interaction.");
    });
    // Remove the event listener after the first interaction
    document.body.removeEventListener('click', playMusicOnFirstInteraction);
    document.body.removeEventListener('scroll', playMusicOnFirstInteraction);
}

// Add event listeners for the first click or scroll to start the music
document.body.addEventListener('click', playMusicOnFirstInteraction);
document.body.addEventListener('scroll', playMusicOnFirstInteraction);


// This code handles the fade-in text effect
const paragraphs = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the element is visible
});

paragraphs.forEach(p => {
    observer.observe(p);
});
