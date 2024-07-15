/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $list1
     * @param ListNode $list2
     * @return ListNode
     */
    function mergeTwoLists($list1, $list2) {
        $dummy = new ListNode(0);
        $current = $dummy;
        $p1 = $list1;
        $p2 = $list2;

        while ($p1 != null && $p2 != null) {
            if ($p1->val < $p2->val) {
                $current->next = $p1;
                $p1 = $p1->next;
            } else {
                $current->next = $p2;
                $p2 = $p2->next;
            }
            $current = $current->next;
        }
        
        if ($p1 != null) {
            $current->next = $p1;
        } else {
            $current->next = $p2;
        }
        
        return $dummy->next;
    }
}
