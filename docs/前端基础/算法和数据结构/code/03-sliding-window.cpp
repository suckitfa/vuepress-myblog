#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <unordered_map>
using namespace std;
vector<int> findAnagrams(string s, string p)
{
    // 存储结果
    vector<int> res;
    unordered_map<char, int> need, window;
    for (char c : p)
        need[c]++;
    int left = 0, right = 0; //[left,right)
    // 当前滑动窗口中，满足要求的字符个数
    int valid = 0;

    while (right < s.size())
    {
        // 滑动窗口先扩大
        char c = s[right];
        right++;
        if (need.count(c))
        {
            window[c]++;
            if (window[c] == need[c])
            {
                valid++;
            }
        }

        // 窗口开始收缩时机，
        while (right - left >= need.size())
        {
            if (valid == need.size())
            {
                // 先保存
                res.push_back(left);
            }
            char t = s[left];
            left++;
            if (need.count(t))
            {
                if (window[t] == need[t])
                    valid--;
                window[t]--;
            }
        }
    }
    return res;
}
int main()
{
    string s = "cbaebabacd", p = "abc";
    findAnagrams(s, t);
}
