  const runFormatting = run => {
    if (run === undefined) return ''
    let runAux = run
    runAux = runAux.replace(/[^0-9kK]+/gi, '')
    runAux = runAux.toUpperCase()

    if (runAux.length > 9) {
      runAux = runAux.slice(0, 9)
    }

    if (!/\./.test(runAux)) {
      let formatedRun = ''
      let tur = runAux
        .split('')
        .reverse()
        .join('')

      for (var i = tur.length - 1; i >= 0; i--) {
        if ((i == 3 || i == 6) && tur[i] != '.') {
          formatedRun = tur[i] + '.' + formatedRun
        } else if (i === 0 && tur[i] != '-') {
          formatedRun = tur[i] + '-' + formatedRun
        } else {
          formatedRun = tur[i] + formatedRun
        }
      }
      return formatedRun
        .split('')
        .reverse()
        .join('')
    }
  }

  const runValidation = run => {
    if (run === undefined) return false
    let runFormated = run.replace(/\./g, '')
    if(!runFormated.includes('-')){
      let runTemp = runFormated.split('')
      let runRes = ''
      for (let index = 0; index < runTemp.length; index++) {
          if(index == runTemp.length - 1){
              runRes = runRes + '-' + runTemp[index] 
          }else{
              runRes = runRes + runTemp[index] 
          }
      }
      runFormated = runRes
    }
    
    let Fn2 = {
      validaRut: function(rutCompleto) {
        if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto)) return false
        let tmp = rutCompleto.split('-')
        let digv = tmp[1]
        let rut = tmp[0]
        if (digv == 'K') digv = 'k'
        return Fn2.dv(rut) == digv
      },
      dv: function(T) {
        let M = 0,
          S = 1
        for (; T; T = Math.floor(T / 10))
          S = (S + (T % 10) * (9 - (M++ % 6))) % 11
        return S ? S - 1 : 'k'
      }
    }
    return Fn2.validaRut(runFormated)
  }

  const runClean = run => {
    return run
      .toString()
      .replace('-', '')
      .replace(/\./g, '')
      .replace(/\s+/g, '')
  }

  const run = run => {
    if(!run) return false
    try {
      const runClean = runClean(run)
      const runValid = runValidation(runClean)
      const runFormat = runFormatting(runClean)
      return {
        runClean,runValid,runFormat
      }  
    } catch (error) {
      return error
    }
    
    
  }

module.exports = {
    runFormatting,
    runValidation,
    runClean,
    run
}