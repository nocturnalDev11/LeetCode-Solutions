class RandomizedSet {
    private $nums;
    private $map;
    
    function __construct() {
        $this->nums = [];
        $this->map = [];
    }
    
    function insert($val) {
        if (isset($this->map[$val])) {
            return false;
        }
        
        $this->nums[] = $val;
        $index = count($this->nums) - 1;
        $this->map[$val] = $index;
        
        return true;
    }
    
    function remove($val) {
        if (!isset($this->map[$val])) {
            return false;
        }
        
        $index = $this->map[$val];
        $lastElement = $this->nums[count($this->nums) - 1];

        $this->nums[$index] = $lastElement;
        $this->map[$lastElement] = $index;

        array_pop($this->nums);
        unset($this->map[$val]);
        
        return true;
    }
    
    function getRandom() {
        $randomIndex = mt_rand(0, count($this->nums) - 1);
        return $this->nums[$randomIndex];
    }
}
