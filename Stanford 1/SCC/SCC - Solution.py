# Implementation of Kosaraju's algorithm for
# finding the strongly connected components
# of directed graphs in O(m+n) time

import sys
import threading
processed = 0
source = 0

def kosaraju(graph):
    finishTimes = {}
    leaders = {}

    vertices = len(graph)
    print 'Vertices in graph: ', vertices
    order = [x for x in range(1, vertices+1)]
    order.reverse()

    print 'Reversing graph edges.'
    reversedGraph = reverseDirectedGraph(graph)
    print 'Running DFS on reversed graph.'    
    kosarajuLoop(reversedGraph, order, finishTimes, leaders)

    # The magic order to visit the nodes in the
    # next pass of DFS is the decreasing order
    # of finishing times.
    swappedTimes = dict(zip(finishTimes.values(), finishTimes.keys()))
    magicOrder = [swappedTimes[x] for x in swappedTimes]
    magicOrder.reverse()

    print 'Running DFS on forward graph.'
    kosarajuLoop(graph, magicOrder, finishTimes, leaders)

    # Get sizes of strongly connected components
    SCCs = {}
    for node in leaders:
        leader = leaders[node]
        if leader not in SCCs:
            SCCs[leader] = 1
        else:
            SCCs[leader] += 1

    reverseSizes = sorted(SCCs.values(), reverse=True)

    print 'Number of SCCs: ', len(reverseSizes)
    print 'SCCs in order of decreasing size:'

    i = 0
    for size in reverseSizes:
        print size
        i += 1

        if i == 10:
            break


def kosarajuLoop(graph, order, finishTimes, leaders):
    global processed
    global source
    processed = 0
    source = 0

    explored = {}
    for node in graph:
        explored[node] = False

    for node in order:
        if explored[node] == False:
            source = node
            kosarajuSearch(graph, node, explored, finishTimes, leaders)

def kosarajuSearch(graph, i, explored, finishTimes, leaders):
    global processed
    global source

    explored[i] = True
    leaders[i] = source

    edges = graph[i]
    for edge in edges:
        if explored[edge] == False:
            kosarajuSearch(graph, edge, explored, finishTimes, leaders)

    processed += 1
    finishTimes[i] = processed


def reverseDirectedGraph(graph):
    reversedGraph = {}

    for node in graph:
        reversedGraph[node] = []

    for node in graph:
        edges = graph[node]
        for edge in edges:
            reversedGraph[edge].append(node)

    return reversedGraph

def depthFirstSearchLoop(explored, graph):
    for node in graph:
        if node not in explored:
            depthFirstSearch(explored, graph, node)


def depthFirstSearch(explored, graph, start):
    explored.append(start)
    for node in graph[start]:
        if node not in explored:
            depthFirstSearch(explored, graph, node)


def makeGraph(lines):
    graph = {}
    for line in lines:
        parsed = [int(x) for x in line.split()]
        if parsed[0] in graph:
            graph[parsed[0]].append(parsed[1])
        else:
            graph[parsed[0]] = [parsed[1]]

    # Make sure that vertices with no edges 
    # are represented in the dictionary
    maxVertex = max(graph.keys())
    for i in range(1, maxVertex+1):
        if i not in graph:
            graph[i] = []

    return graph

def main():

    

    print "***Kosaraju's Algorithm***"
    print 'Computing SCCs...'

    graphSample = {1: [4],
                   2: [8],
                   3: [6],
                   4: [7],
                   5: [2],
                   6: [9],
                   7: [1],
                   8: [5, 6],
                   9: [3, 7]}

#    explored = []
#    depthFirstSearchLoop(explored, graphSample)
#    print explored
#    print graphSample
#    print reverseDirectedGraph(graphSample)

    inputFile = open('SCC.txt', 'r')
    allLines = inputFile.readlines()
    inputFile.close()

    graph = makeGraph(allLines)
    kosaraju(graph)

if __name__ == '__main__':
   
   threading.stack_size(67108864)
   sys.setrecursionlimit(2 ** 20)
   thread = threading.Thread(target = main)
   thread.start()