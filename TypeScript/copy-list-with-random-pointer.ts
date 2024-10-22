function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null;

    let current = head;

    while (current) {
        const copyNode = new _Node(current.val);
        copyNode.next = current.next;
        current.next = copyNode;
        current = copyNode.next;
    }

    current = head;
    while (current) {
        const copyNode = current.next;
        copyNode.random = current.random ? current.random.next : null;
        current = copyNode.next;
    }

    current = head;
    const newHead = head.next;
    while (current) {
        const copyNode = current.next;
        current.next = copyNode.next;
        current = copyNode.next;
        if (copyNode.next) {
            copyNode.next = copyNode.next.next;
        }
    }

    return newHead;
}
