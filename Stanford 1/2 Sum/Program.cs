using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            string text = System.IO.File.ReadAllText(@"D:\Study\Algorithms Coursera\Hash table\sum.txt");
            string[] oArray = text.Split(new string[] { "\n" }, System.StringSplitOptions.RemoveEmptyEntries);
            int xValue= 0;
            List<int> target = new List<int>();
            double[] pArray = new double[1000000];
            for (var iCounter = 0; iCounter < oArray.Length; iCounter++)
            {
                pArray[iCounter] = double.Parse(oArray[iCounter]);
            }
            Array.Sort(pArray);            
            double[] sArray = pArray.Distinct().ToArray();
      
            double min, max;
            int l, r, q, lower, upper;
            for (var iCounter = 0; iCounter < sArray.Length; iCounter++)
            {
                l = 0;
                r = sArray.Length - 1;
                min = -10000 - sArray[iCounter];
                max = 10000 - sArray[iCounter];
                lower = 0;
                upper = 0;
                while (l < r)
                {
                    q = l + (r - l) / 2;
                    if (sArray[q] <= min)
                        l = q + 1;
                    else
                        r = q;
                }
                lower = l;
                l = 0;
                r = sArray.Length - 1;
                while (l < r)
                {
                    q = l + (r - l) / 2;
                    if (sArray[q] >= max)
                        r = q;
                    else
                        l = q + 1;
                }
                upper = l;
                while (lower < upper)
                {
                    xValue =  Convert.ToInt32(sArray[iCounter] + sArray[lower]);
                    if (target.IndexOf(xValue) == -1)
                    {
                        target.Add(xValue);
                    }
                    lower++;
                }
            }
            Console.WriteLine(target.Count);
            Console.ReadLine();
        }
    }
}
