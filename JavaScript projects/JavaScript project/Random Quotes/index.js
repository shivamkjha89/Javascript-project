const btn= document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
   "It is better to fail in originality than to succeed in imitation."," Avoid daydreaming about the years to come.","You are the most important person in your whole life.","Always be true to who you are, and ignore what other people have to say about you.","Always be true to who you are, and ignore what other people have to say about you.","Only demonstrate your strength when it’s really required.","The road to success and the road to failure are almost exactly the same.","Subscribe to Drop X Out"
]

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quote.length);
    output.textContent = quote[random];
})