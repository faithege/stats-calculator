export const statsCalculator = (sequence) => {
  console.log(`statsCalculator:: ${sequence}`)
  const minimum = Math.min(...sequence)
  const maximum = Math.max(...sequence)
  const length = sequence.length

  const average = sequence.reduce((total, currentValue) => total + currentValue)/length
  return {
    minimum,
    maximum,
    length,
    average
  }
};