export default interface UseCase<E, S> {
  execute(input: E): Promise<S>
}
