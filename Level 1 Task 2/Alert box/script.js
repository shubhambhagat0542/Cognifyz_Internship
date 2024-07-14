function showGreeting() {
    var now = new Date();
    var hours = now.getHours();
    var greeting;

    if (hours < 12) {
        greeting = 'Good morning!';
    } else if (hours < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    alert(greeting);
}
