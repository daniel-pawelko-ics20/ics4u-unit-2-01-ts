/**
 * Mr Coxall Stack
 *
 *
 * By: Daniel Pawelko
 * Version: 1.0
 * Since:   2022-10-23
 */

class MrCoxallStack {
  stack_as_list: number[] = []

  Push(pushedNumber: number): void {
    // add a number to the list
    this.stack_as_list.push(pushedNumber)
  }

  ShowStack(): void {
    // print out the stack to the console
    console.log(this.stack_as_list)
  }
}
export = MrCoxallStack
