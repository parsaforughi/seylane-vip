(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__814536e8._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/mock-data.ts [app-edge-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAutoDmPayload",
    ()=>getAutoDmPayload,
    "getExplainerConversations",
    ()=>getExplainerConversations,
    "getExplainerMessages",
    ()=>getExplainerMessages,
    "getExplainerMessagesByConversation",
    ()=>getExplainerMessagesByConversation,
    "getExplainerThreadConversations",
    ()=>getExplainerThreadConversations,
    "getIceballPayload",
    ()=>getIceballPayload,
    "getModuleStats",
    ()=>getModuleStats,
    "listModuleStats",
    ()=>listModuleStats,
    "nextActivityLog",
    ()=>nextActivityLog,
    "summarizeExplainerTraffic",
    ()=>summarizeExplainerTraffic
]);
const statsSeed = {
    explainer: {
        module: 'explainer',
        throughput: 4820,
        accuracy: 96,
        mood: 'Hyperclear',
        delta: 12,
        trend: [
            40,
            45,
            50,
            52,
            56,
            58,
            62,
            72
        ],
        uptime: 99.2,
        responseTime: 0.94
    },
    autodm: {
        module: 'autodm',
        throughput: 3120,
        accuracy: 92,
        mood: 'Proactive',
        delta: 7,
        trend: [
            22,
            30,
            45,
            43,
            50,
            55,
            60,
            66
        ],
        uptime: 98.7,
        responseTime: 1.23
    },
    iceball: {
        module: 'iceball',
        throughput: 1960,
        accuracy: 94,
        mood: 'Calibrated',
        delta: 4,
        trend: [
            10,
            15,
            24,
            28,
            26,
            32,
            40,
            48
        ],
        uptime: 99.7,
        responseTime: 0.67
    }
};
const explainerConversations = [
    {
        id: 'conv-192',
        topic: 'AI onboarding explainer',
        owner: 'Nova Robotics',
        state: 'resolving',
        progress: 78,
        updatedAt: '2m ago',
        waveform: [
            2,
            5,
            8,
            4,
            9,
            11
        ]
    },
    {
        id: 'conv-155',
        topic: 'Payment compliance narrative',
        owner: 'HelioPay',
        state: 'training',
        progress: 42,
        updatedAt: '12m ago',
        waveform: [
            1,
            3,
            5,
            6,
            4,
            8
        ]
    },
    {
        id: 'conv-103',
        topic: 'Hardware refresh briefing',
        owner: 'Stark Labs',
        state: 'shipped',
        progress: 100,
        updatedAt: '32m ago',
        waveform: [
            3,
            4,
            6,
            9,
            12,
            15
        ]
    }
];
const explainerMessages = [
    {
        id: 'msg-1',
        author: 'Explainer Core',
        channel: 'sdr-sync',
        content: 'Clarified onboarding drift. Aligning hero narrative with Q4 StarkOS drop.',
        timestamp: 'Just now',
        priority: 'high'
    },
    {
        id: 'msg-2',
        author: 'Ops Relay',
        channel: 'field',
        content: 'Need higher fidelity asset for Iceball push. Requesting neon-etched overlays.',
        timestamp: '2m ago',
        priority: 'medium'
    },
    {
        id: 'msg-3',
        author: 'Explainer Core',
        channel: 'product',
        content: 'Gave Nova robotics a new call-to-action. Monitoring lift.',
        timestamp: '9m ago',
        priority: 'low'
    }
];
const minutesAgo = (value)=>new Date(Date.now() - value * 60 * 1000).toISOString();
const explainerThreadSeed = {
    'conv-stark-net': {
        userId: 'usr-4821',
        username: 'Helix Collective',
        transcript: [
            {
                id: 'exp-msg-001',
                from: 'user',
                text: 'Need faster pivot on hero story for glass summit demo deck.',
                minutesAgo: 240
            },
            {
                id: 'exp-msg-002',
                from: 'bot',
                text: 'Drafted neon script referencing quantum uplift. Reviewing tone now.',
                minutesAgo: 233
            },
            {
                id: 'exp-msg-003',
                from: 'user',
                text: 'Add mention of sealed StarkMesh updates midway through.',
                minutesAgo: 217
            },
            {
                id: 'exp-msg-004',
                from: 'bot',
                text: 'Callout injected with StarkMesh copy + annotated asset link.',
                minutesAgo: 205
            },
            {
                id: 'exp-msg-005',
                from: 'bot',
                text: 'Uploading new motion preview for deck slide 04.',
                minutesAgo: 190
            },
            {
                id: 'exp-msg-006',
                from: 'user',
                text: 'Preview looks sharp. Need CTA variant for APAC crew.',
                minutesAgo: 168
            },
            {
                id: 'exp-msg-007',
                from: 'bot',
                text: 'APAC CTA minted + staged in orbit folder.',
                minutesAgo: 150
            }
        ]
    },
    'conv-lumina-sprint': {
        userId: 'usr-9032',
        username: 'Lumina Ops',
        transcript: [
            {
                id: 'exp-msg-101',
                from: 'user',
                text: 'Cold start from partner success story? Need a crisp soundbite.',
                minutesAgo: 110
            },
            {
                id: 'exp-msg-102',
                from: 'bot',
                text: 'Synthesizing quote referencing glass firewall reliability.',
                minutesAgo: 104
            },
            {
                id: 'exp-msg-103',
                from: 'bot',
                text: 'Injecting gradient overlay for final asset handoff.',
                minutesAgo: 98
            },
            {
                id: 'exp-msg-104',
                from: 'user',
                text: 'Add real-time response stat at 98.2%.',
                minutesAgo: 95
            },
            {
                id: 'exp-msg-105',
                from: 'bot',
                text: 'Stat added with footnote + inline CTA anchor.',
                minutesAgo: 90
            },
            {
                id: 'exp-msg-106',
                from: 'user',
                text: 'Looks ready. Ship it upstream.',
                minutesAgo: 86
            }
        ]
    },
    'conv-ice-cascade': {
        userId: 'usr-7410',
        username: 'Polar Sequence',
        transcript: [
            {
                id: 'exp-msg-201',
                from: 'user',
                text: 'Need calmer tone on onboarding flow, team is anxious.',
                minutesAgo: 80
            },
            {
                id: 'exp-msg-202',
                from: 'bot',
                text: 'Softened copy and layered subtle frost animation.',
                minutesAgo: 75
            },
            {
                id: 'exp-msg-203',
                from: 'user',
                text: 'Great. Add microcopy for fail-safe step please.',
                minutesAgo: 70
            },
            {
                id: 'exp-msg-204',
                from: 'bot',
                text: 'Fail-safe copy added with amber glow accent.',
                minutesAgo: 62
            },
            {
                id: 'exp-msg-205',
                from: 'bot',
                text: 'Pushing localized strings for FR + JP.',
                minutesAgo: 54
            },
            {
                id: 'exp-msg-206',
                from: 'user',
                text: 'JP string needs shorter CTA, 12 chars max.',
                minutesAgo: 31
            },
            {
                id: 'exp-msg-207',
                from: 'bot',
                text: 'Trimmed JP CTA and validated kerning.',
                minutesAgo: 18
            },
            {
                id: 'exp-msg-208',
                from: 'user',
                text: 'Perfect, queuing preview burn.',
                minutesAgo: 9
            }
        ]
    },
    'conv-signal-wisp': {
        userId: 'usr-6099',
        username: 'Signal Wisp',
        transcript: [
            {
                id: 'exp-msg-301',
                from: 'bot',
                text: 'Proposed whisper intro to match their sonic brand.',
                minutesAgo: 60
            },
            {
                id: 'exp-msg-302',
                from: 'user',
                text: 'Can we raise tempo after 6 seconds?',
                minutesAgo: 56
            },
            {
                id: 'exp-msg-303',
                from: 'bot',
                text: 'Yes. Ramping tempo + layering holo percussion.',
                minutesAgo: 52
            },
            {
                id: 'exp-msg-304',
                from: 'user',
                text: 'Need script line about “zero-friction handoff”.',
                minutesAgo: 39
            },
            {
                id: 'exp-msg-305',
                from: 'bot',
                text: 'Line added. Rendering updated voice files now.',
                minutesAgo: 34
            },
            {
                id: 'exp-msg-306',
                from: 'user',
                text: 'Voice is good. Drop shorter outro to land within 45s.',
                minutesAgo: 21
            },
            {
                id: 'exp-msg-307',
                from: 'bot',
                text: 'Outro trimmed; sending mastered track.',
                minutesAgo: 12
            },
            {
                id: 'exp-msg-308',
                from: 'user',
                text: 'Received. Logging metrics once it airs.',
                minutesAgo: 5
            }
        ]
    }
};
const explainerConversationMessageMap = Object.entries(explainerThreadSeed).reduce((acc, [conversationId, seed])=>{
    const sortedTranscript = [
        ...seed.transcript
    ].sort((a, b)=>b.minutesAgo - a.minutesAgo);
    acc[conversationId] = sortedTranscript.map((entry)=>({
            id: entry.id,
            conversationId,
            from: entry.from,
            text: entry.text,
            createdAt: minutesAgo(entry.minutesAgo)
        }));
    return acc;
}, {});
const explainerThreadMessages = Object.values(explainerConversationMessageMap).flat();
const explainerThreadConversations = Object.entries(explainerThreadSeed).map(([conversationId, seed])=>{
    const threadMessages = explainerConversationMessageMap[conversationId] ?? [];
    const inboundCount = threadMessages.filter((message)=>message.from === 'user').length;
    const outboundCount = threadMessages.filter((message)=>message.from === 'bot').length;
    const lastMessageAt = threadMessages[threadMessages.length - 1]?.createdAt ?? minutesAgo(0);
    return {
        id: conversationId,
        userId: seed.userId,
        username: seed.username,
        inboundCount,
        outboundCount,
        lastMessageAt
    };
});
const isSameDay = (a, b)=>a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate();
const activityLogTemplates = [
    'StarkOS kernel patch streamed by Iceball',
    'AutoDM rerouted warm leads to clarity lane',
    'Explainer minted a new animation pack for Nova Robotics',
    'Telemetry anomaly smoothed by Iceball heuristics',
    'AutoDM ghosted spam attempts coming from dark social'
];
const autoDmStats = [
    {
        label: 'Engagement',
        value: 84,
        target: 100,
        delta: 6
    },
    {
        label: 'Warm replies',
        value: 312,
        target: 400,
        delta: 11
    },
    {
        label: 'Routes cleared',
        value: 58,
        target: 60,
        delta: 2
    },
    {
        label: 'Auto-personas',
        value: 24,
        target: 30,
        delta: 5
    }
];
const autoDmSequences = [
    {
        id: 'seq-1',
        campaign: 'Neon Drip',
        audience: 'Design Ops',
        sendRate: 82,
        conversion: 38
    },
    {
        id: 'seq-2',
        campaign: 'Signal Boost',
        audience: 'Growth Labs',
        sendRate: 64,
        conversion: 42
    },
    {
        id: 'seq-3',
        campaign: 'Ghost Lane',
        audience: 'Dark Social',
        sendRate: 90,
        conversion: 33
    }
];
const iceballNodes = [
    {
        id: 'node-1',
        name: 'Cryo Beacon 01',
        status: 'stable',
        temperature: -62,
        charge: 88
    },
    {
        id: 'node-2',
        name: 'Cryo Beacon 02',
        status: 'charging',
        temperature: -48,
        charge: 55
    },
    {
        id: 'node-3',
        name: 'Cryo Beacon 03',
        status: 'cooldown',
        temperature: -71,
        charge: 92
    },
    {
        id: 'node-4',
        name: 'Cryo Beacon 04',
        status: 'stable',
        temperature: -58,
        charge: 79
    }
];
const iceballAlerts = [
    {
        id: 'alert-1',
        description: 'Microfracture sealed on Beacon 02. Coolant flow normalized.',
        severity: 'medium',
        timestamp: '3m ago'
    },
    {
        id: 'alert-2',
        description: 'Hologrid fog density optimal for next deploy.',
        severity: 'low',
        timestamp: '12m ago'
    },
    {
        id: 'alert-3',
        description: 'External ping deflected by frost shield. No breach.',
        severity: 'low',
        timestamp: '18m ago'
    }
];
function getModuleStats(module) {
    return statsSeed[module];
}
function listModuleStats() {
    return Object.values(statsSeed);
}
function getExplainerConversations() {
    return explainerConversations;
}
function getExplainerMessages() {
    return explainerMessages;
}
function getExplainerThreadConversations() {
    return explainerThreadConversations;
}
function getExplainerMessagesByConversation(conversationId) {
    const messages = explainerConversationMessageMap[conversationId] ?? [];
    return [
        ...messages
    ].sort((a, b)=>new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
}
function summarizeExplainerTraffic() {
    const now = new Date();
    const totalReceived = explainerThreadMessages.filter((message)=>message.from === 'user').length;
    const totalSent = explainerThreadMessages.filter((message)=>message.from === 'bot').length;
    const todayReceived = explainerThreadMessages.filter((message)=>message.from === 'user' && isSameDay(new Date(message.createdAt), now)).length;
    const todaySent = explainerThreadMessages.filter((message)=>message.from === 'bot' && isSameDay(new Date(message.createdAt), now)).length;
    return {
        totalReceived,
        totalSent,
        todayReceived,
        todaySent
    };
}
function nextActivityLog(module) {
    const entry = activityLogTemplates[Math.floor(Math.random() * activityLogTemplates.length)];
    return {
        id: crypto.randomUUID(),
        source: module,
        message: entry,
        timestamp: new Date().toISOString()
    };
}
function getAutoDmPayload() {
    return {
        stats: autoDmStats,
        sequences: autoDmSequences
    };
}
function getIceballPayload() {
    return {
        nodes: iceballNodes,
        alerts: iceballAlerts
    };
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/log-stream.ts [app-edge-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "streamLogs",
    ()=>streamLogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$mock$2d$data$2e$ts__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/mock-data.ts [app-edge-route] (ecmascript)");
;
const encoder = new TextEncoder();
function streamLogs(module) {
    const stream = new ReadableStream({
        start (controller) {
            let timer = null;
            const push = ()=>{
                const payload = JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$mock$2d$data$2e$ts__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["nextActivityLog"])(module));
                controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
            };
            controller.enqueue(encoder.encode('retry: 1000\n\n'));
            const schedule = ()=>{
                timer = setTimeout(()=>{
                    push();
                    schedule();
                }, 1000 + Math.random() * 2000);
            };
            push();
            schedule();
            return ()=>{
                if (timer) {
                    clearTimeout(timer);
                }
            };
        }
    });
    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache, no-transform',
            Connection: 'keep-alive'
        }
    });
}
}),
"[project]/Desktop/seylane-vip/seylane-dashboard/app/api/mock/autodm/logs/route.ts [app-edge-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$log$2d$stream$2e$ts__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/seylane-vip/seylane-dashboard/lib/api/log-stream.ts [app-edge-route] (ecmascript)");
;
const runtime = 'edge';
function GET() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$seylane$2d$vip$2f$seylane$2d$dashboard$2f$lib$2f$api$2f$log$2d$stream$2e$ts__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["streamLogs"])('autodm');
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__814536e8._.js.map