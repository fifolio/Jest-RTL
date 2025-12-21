export function filterAdults(ages: number[]) {
    return ages.filter(age => age >= 18)
}