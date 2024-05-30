const funcs = []
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
funcs[6]()

// O let vai lembrar pra ojnde esta apontando os valores