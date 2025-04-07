class Node {
  constructor(page) {
    this.page = page;
    this.prev = null;
    this.next = null;
  }
}

export class DoubleLinkedList {
  constructor(pages = []) {
    this.current = null;
    for (const page of pages) {
      this.visit(page);
    }
  }

  visit(page) {
    const newNode = new Node(page);
    if (this.current) {
      this.current.next = newNode;
      newNode.prev = this.current;
    }
    this.current = newNode;
  }

  back() {
    if (this.current?.prev) {
      this.current = this.current.prev;
      return this.current.page;
    }
    return this.current?.page || null;
  }

  forward() {
    if (this.current?.next) {
      this.current = this.current.next;
      return this.current.page;
    }
    return this.current?.page || null;
  }

  getCurrentPage() {
    return this.current?.page || null;
  }

  canGoBack() {
    return !!this.current?.prev;
  }

  canGoForward() {
    return !!this.current?.next;
  }
} 