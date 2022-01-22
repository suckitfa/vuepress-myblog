# LRU
请你设计并实现一个满足LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
- LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
- int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
- void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

### LRU底层数据结构： 哈希表 + 双向链表
> 哈希表确保`get`为 `O(1)`

> 双向量表确保`put`为 `0(1)`

![image-20211213114844231](./img/image-20211213114844231.png)

1. 哈希：get, put  `O(1)`
2. 双向链表保持顺序

```java
class LRUCache {
    private HashMap<Integer,Node> map;
    private DoubleList cache;
    private int cap;

    public LRUCache(int capacity) {
        this.cap = capacity;
        map = new HashMap<>();
        cache = new DoubleList();
    }
    
    public int get(int key) {
        if(!map.containsKey(key)) return -1;
        makeRecently(key);
        return map.get(key).val;
    }
    
    public void put(int key, int value) {
        if(map.containsKey(key)) {
            deleteKey(key);
            addRecently(key,value);
            return ;
        }
        if(cap == cache.size()) {
            removeLeastRecently();
        }
        addRecently(key,value);
    }

    private void makeRecently(int key) {
        Node x = map.get(key);
        cache.remove(x);
        cache.addLast(x);
    }

    private void addRecently(int key,int val) {
        Node x = new Node(key,val);
        cache.addLast(x);
        map.put(key,x);
    }

    private void deleteKey(int key) {
        Node x = map.get(key);
        cache.remove(x);
        map.remove(key);
    }

    private void removeLeastRecently() {
        Node deleteNode = cache.removeFirst();
        int deleteKey = deleteNode.key;
        map.remove(deleteKey);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */

 class Node {
     public int key,val;
     public Node next,prev;
     public Node(int k,int v) {
         this.key = k;
         this.val = v;
     }
 }

 class DoubleList {
     private Node head,tail;
     private int size;

     public DoubleList() {
         head = new Node(0,0);
         tail = new Node(0,0);
         head.next = tail;
         tail.prev = head;
         size = 0;
     }
     public void addLast(Node x) {
         x.prev = tail.prev;
         x.next = tail;
         tail.prev.next = x;
         tail.prev  = x;
         size ++;
     }

     public void remove(Node x) {
         x.prev.next = x.next;
         x.next.prev = x.prev;
         size --;
     }

     public Node removeFirst( ) {
         if(head.next == tail) {
             return null;
         }
         Node first = head.next;
         remove(first);
         return first;
     }
     public int size() {
         return size;
     }
 }
```

```js
class ListNode {
    constructor(key,value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}
```

```js
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.hash = {}
        this.count = 0
        this.dummyHead = new ListNode()
        this.dummyTail = new ListNode()
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }
    // lru cache 逻辑
    get(key) {
        let node = this.hash[key]
        if(node == null) return -1
        this.moveToHead(node)
        return node.value
    }
    
    put(key,value) {
        let node = this.hash[key]
        if (node == null) {
            if (this.count == this.capacity) {
                this.removeLRUItem()
            }
            let newNode = new ListNode(key,value)
            this.hash[key] = newNode
            this.addToHead(newNode)
            this.count++
        } else {
            node.value = value
            this.moveToHead(node)
        }
    }
    // double link list 基础操作封装
    moveToHead(node) {
        this.removeFromList(node)
        this.addToHead(node)
    }
    removeFromList(node) {
        let temp1 = node.prev
        let temp2 = node.next
        temp1.next = temp2
        temp2.prev = temp1
    }
    addToHead(node) {
        node.prev = this.dummyHead
        node.next = this.dummyHead.next
        this.dummyHead.next.prev = node
        this.dummyHead.next = node
    }
    removeLRUItem() {
        const tail = this.popTail()
        delete this.hash[tail.key]
        this.count --
    }
    // 移除最后一个
    popTail() {
        let tail = this.dummyTai.prev
        this.removeFromList(tail)
        return tail
    }
}
```