class Solution {
    int canCompleteCircuit(List<int> gas, List<int> cost) {
      int n = gas.length;
      int total_tank = 0;
      int current_tank = 0;
      int start = 0;
      int total_cost = 0;
      
      for (int i = 0; i < n; i++) {
          total_tank += gas[i];
          total_cost += cost[i];
          current_tank += gas[i] - cost[i];
          
          if (current_tank < 0) {
              start = i + 1;
              current_tank = 0;
          }
      }
  
      return total_tank >= total_cost ? start : -1;
    }
}
