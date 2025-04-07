export class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      newNode.next = this.head 
    } else {
      this.tail.next = newNode // first we connect the new node to the last element
      newNode.next = this.head // the new node is referencing to the head bc he is the new tail 
      this.tail = newNode // now, the tail is the new node
    }

    this.length++
  }

  peek(value, current = this.head) {
    if (!this.head) return null

    let count = 0
    while (count < this.length) {
      if (current.value === value) return current
      current = current.next
      count++
    }

    return null
  }

  size() {
    return this.length
  }

  remove(value) {
    if (!this.head) return null

    let current = this.head
    let prev = this.tail
    let count = 0

    while (count < this.length) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next
          this.tail.next = this.head
        } else {
          prev.next = current.next
          if (current === this.tail) {
            this.tail = prev
          }
        }

        this.length--

        if (this.length === 0) {
          this.head = null
          this.tail = null
        }

        return
      }

      prev = current
      current = current.next
      count++
    }
  }

}

// sample data
const song1 = {
  title: 'One',
  artist: 'Metallica',
  cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c0/a7/0e/c0a70e27-0a2e-590c-b873-4814961a0dc4/15UMGIM25544.rgb.jpg/1200x1200bf-60.jpg'
}

const song2 = {
  title: 'Freak on a leash',
  artist: 'Korn',
  cover: 'https://upload.wikimedia.org/wikipedia/en/5/52/Korn_follow_the_leader.jpg'
}

const song3 = {
  title: 'Before I forget',
  artist: 'Slipknot',
  cover: 'https://i.scdn.co/image/ab67616d0000b2736b3463e7160d333ada4b175a'
}

const song4 = {
  title: 'Paradise city',
  artist: 'Gun n roses',
  cover: 'https://i.scdn.co/image/ab67616d0000b27321ebf49b3292c3f0f575f0f5'
}

export const playlist = new LinkedList()

playlist.append(song1)
playlist.append(song2)
playlist.append(song3)
playlist.append(song4)