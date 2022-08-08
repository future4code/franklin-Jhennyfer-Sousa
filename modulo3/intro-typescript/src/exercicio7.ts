function converteDnaRna (dna: string) {
    const rna: any = dna.replace(/a/gi, 'u').replace(/t/gi, 'a').replace(/g/gi, 'c').replace(/c/gi, 'g') 
    return rna
}
console.log(converteDnaRna('ATT GCT GCG CAT TAA CGA CGC GTA'))




/* UAA CGA CGC GUA AUU GCU GCG CAU */