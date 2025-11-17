const challenges = [
{
wrong: `
int main() {
    int *p;
    *p = 10; // segmentation fault
    printf("%d", *p);
}
`,
correct: `
int main() {
    int x = 10;
    int *p = &x;
    printf("%d", *p);
}
`
},
{
wrong: `
#define max(a,b) a>b?a:b
int main(){ int i=1,j=2; printf("%d",max(i++,j++)); }
`,
correct: `
#define max(a,b) ((a)>(b)?(a):(b))
int main(){ int i=1,j=2; printf("%d",max(i,j)); }
`
}
];

let index = Math.floor(Math.random()*challenges.length);
document.getElementById("codeBlock").textContent = challenges[index].wrong;

let time = 40;
let timer = setInterval(() => {
    time--;
    document.getElementById("timer").textContent = time;
    if (time <= 0) {
        clearInterval(timer);
        document.getElementById("result").textContent = "Time's up!";
    }
}, 1000);

document.getElementById("submitBtn").onclick = () => {
    let userCode = document.getElementById("editor").value.trim();
    if (userCode === challenges[index].correct.trim()) {
        document.getElementById("result").textContent =
            "Correct! Score: " + (time * 10);
    } else {
        document.getElementById("result").textContent = "Incorrect.";
    }
};
