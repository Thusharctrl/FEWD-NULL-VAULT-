const topics = {
    ptr2ptr: {
        title: "Pointer-to-Pointer",
        diagram: `
p ---> *p ---> **p

Memory:
[ value ]
[ address of p ]
[ address stored inside p ]
        `,
        explanation: `
A pointer-to-pointer stores the address of another pointer.
Useful for dynamic allocation, matrices, modifying caller pointers.
        `,
        code: `
int x = 10;
int *p = &x;
int **pp = &p;
printf("%d", **pp);
        `,
        quiz: [
            {
                q: "What does **pp represent?",
                a: ["Value pointed by p", "Address of p", "Pointer to x"],
                c: 0
            }
        ]
    },

    funcptr: {
        title: "Function Pointers",
        diagram:`fp ---> function`,
        explanation: "A function pointer stores the address of a function.",
        code:`int add(int a,int b){return a+b;} int (*fp)(int,int)=add;`,
        quiz:[
            {q:"How to call a function pointer?", a:["fp(a,b)","*fp + a","fp + 1"], c:0}
        ]
    }
};

document.getElementById("topicSelect").addEventListener("change", e => {
    let key = e.target.value;
    let t = topics[key];

    document.getElementById("content").innerHTML = `
        <h3>${t.title}</h3>
        <pre>${t.diagram}</pre>
        <p>${t.explanation}</p>
        <pre>${t.code}</pre>
        <h4>Quick Quiz</h4>
        <p>${t.quiz[0].q}</p>
    `;
});
