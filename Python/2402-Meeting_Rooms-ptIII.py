#2402. Meeting Rooms III
import heapq

class Solution:
    def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
        meetings.sort()
        
        available_rooms = list(range(n))
        heapq.heapify(available_rooms)
        ongoing_meetings = []
        
        meetings_count = [0] * n
        
        for start, end in meetings:
            while ongoing_meetings and ongoing_meetings[0][0] <= start:
                end_time, room = heapq.heappop(ongoing_meetings)
                heapq.heappush(available_rooms, room)
            
            if available_rooms:
                room = heapq.heappop(available_rooms)
                heapq.heappush(ongoing_meetings, (end, room))
            else:
                end_time, room = heapq.heappop(ongoing_meetings)
                new_end = end_time + (end - start)
                heapq.heappush(ongoing_meetings, (new_end, room))
            
            meetings_count[room] += 1
        
        max_meetings = max(meetings_count)
        for i in range(n):
            if meetings_count[i] == max_meetings:
                return i

sol = Solution()
print(sol.mostBooked(2, [[0,10],[1,5],[2,7],[3,4]]))  # Output: 0
print(sol.mostBooked(3, [[1,20],[2,10],[3,5],[4,9],[6,8]]))  # Output: 1
  
