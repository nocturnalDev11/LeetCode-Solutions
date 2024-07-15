class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isValid($s) {
        $stack = [];
        $mapping = [
            ')' => '(',
            '}' => '{',
            ']' => '['
        ];
        
        for ($i = 0; $i < strlen($s); $i++) {
            $char = $s[$i];
            
            if (in_array($char, ['(', '{', '['])) {
                array_push($stack, $char);
            } else {
                if (empty($stack)) {
                    return false;
                }

                $top = array_pop($stack);
                if ($top != $mapping[$char]) {
                    return false;
                }
            }
        }

        return empty($stack);
    }
}
