#!/usr/bin/python
#based on
#http://codehiker.wordpress.com/2012/04/01/graph-min-cut-problem/

from random import choice
from collections import Counter
from copy import deepcopy

def karger(g):
  while len(g) > 2:
    v1 = choice(g.keys())
    gv1 = g[v1]
    #bad weighting, unlikely to get min cut
    #v2 = choice(gv1.keys())
    #weighted, likely to get min cut
    #v2 = choice(list(gv1.elements()))
    #biased, more likely to get min cut
    v2 = gv1.most_common(1)[0][0]
    gv2 = g[v2]
    #1. remove v2's list
    del g[v2]
    #2. remove self-loop
    del gv2[v1]
    del gv1[v2]
    #3. attach v2's list to v1
    gv1.update(gv2)
    #4. replace all appearance of v2 as v1
    for v3 in gv2:
      gv3 = g[v3]
      gv3[v1] += gv3[v2]
      del gv3[v2]
  return g.itervalues().next().most_common(1)[0][1]

g = {}
with open('kargerMinCut.txt') as f:
  for line in f:
    ints = [int(x) for x in line.split()]
    g[ints[0]] = Counter(ints[1:])

cuts = [karger(deepcopy(g)) for i in range(5)]
print min(cuts), cuts

