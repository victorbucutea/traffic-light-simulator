Traffic light simulator
-------

The design behind it becomes rather easy if the problem is viewed from the traffic 'flow'. Each flow
( direction in which a car can be heading e,g, forward, right or left ) must be modeled in the the application. Once a flow is active,
it means care which belong to that flow can proceed , and the semaphore lights shoudl change accordingly.

It is this 'central manager' which decides which flow will be active, the semaphores at the side of the road will just
be slaves which change color according to their 'central manager'.

If the semaphores themselves change color and command the other semaphores to respect their color, too many events will
be generated and to many 'safety' checks need to be put in place and a very precise clock is required to keep them in sync.