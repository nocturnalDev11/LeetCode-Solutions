#include <vector>
#include <algorithm>

class Solution {
public:
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        sort(envelopes.begin(), envelopes.end(), [](const vector<int>& env1, const vector<int>& env2) {
            return env1[0] < env2[0] || (env1[0] == env2[0] && env1[1] > env2[1]);
        });

        int numEnvelopes = envelopes.size();

        vector<int> heightSequence{ envelopes[0][1] };

        for (int i = 1; i < numEnvelopes; ++i) {
            int currentHeight = envelopes[i][1];
            if (currentHeight > heightSequence.back()) {
                heightSequence.push_back(currentHeight);
            } else {
                auto it = lower_bound(heightSequence.begin(), heightSequence.end(), currentHeight);
                *it = currentHeight;
            }
        }
        return heightSequence.size();
    }
};
