function solution(spell, dic) {
    let sortingSpell = spell.sort().join("");
    let result = dic.map(v => v.split("").sort().join(""))
                    .find(v => v === sortingSpell);

    return result === undefined ? 2 : 1;
}