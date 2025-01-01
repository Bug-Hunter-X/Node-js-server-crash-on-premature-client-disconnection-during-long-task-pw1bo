# Node.js Server Crash on Premature Client Disconnection

This repository demonstrates a common issue in Node.js servers where a crash occurs when a client closes the connection before the server completes a long-running task. The server attempts to write to a closed socket, resulting in an error.

## Bug Description

A Node.js HTTP server handles requests that involve a simulated long-running task.  If a client closes the connection before the task is finished, the server throws an error because it tries to send a response to a closed connection.

## Solution

The solution involves checking the connection status before sending a response.  This is done by using the 'socket.destroyed' property.