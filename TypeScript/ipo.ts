function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    const projects = capital.map((cap, i) => [cap, profits[i]]);
    projects.sort((a, b) => a[0] - b[0]);
    
    const availableProjects = new MaxHeap();
    let currentCapital = w;
    let projectIndex = 0;
    
    for (let i = 0; i < k; i++) {
        while (projectIndex < projects.length && projects[projectIndex][0] <= currentCapital) {
            availableProjects.insert(projects[projectIndex][1]);
            projectIndex++;
        }

        if (availableProjects.isEmpty()) {
            break;
        }

        currentCapital += availableProjects.extractMax();
    }
    
    return currentCapital;
}

class MaxHeap {
    private heap: number[];
    
    constructor() {
        this.heap = [];
    }
    
    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }
    
    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }
    
    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }
    
    private swap(index1: number, index2: number): void {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
    
    private siftUp(index: number): void {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }
    
    private siftDown(index: number): void {
        const size = this.heap.length;
        
        while (true) {
            let maxIndex = index;
            const leftChild = this.getLeftChildIndex(index);
            const rightChild = this.getRightChildIndex(index);
            
            if (leftChild < size && this.heap[leftChild] > this.heap[maxIndex]) {
                maxIndex = leftChild;
            }
            
            if (rightChild < size && this.heap[rightChild] > this.heap[maxIndex]) {
                maxIndex = rightChild;
            }
            
            if (maxIndex === index) {
                break;
            }
            
            this.swap(index, maxIndex);
            index = maxIndex;
        }
    }
    
    insert(value: number): void {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
    }
    
    extractMax(): number {
        if (this.heap.length === 0) {
            return -1;
        }
        
        const max = this.heap[0];
        const last = this.heap.pop()!;
        
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.siftDown(0);
        }
        
        return max;
    }
    
    isEmpty(): boolean {
        return this.heap.length === 0;
    }
}
