export const formatTime = (time: number): string => {
  const minutes = ~~(time / 60);
  const seconds = time % 60;
  return `${('0' + minutes).slice(-2)} : ${('0' + seconds).slice(-2)}`
}

export const MockFunction = (): void => {

}
