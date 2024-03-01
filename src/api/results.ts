import {MenuItem} from "../types";

export type ResultKey = 'small' | 'medium' | 'large';

export const results: Record<ResultKey, MenuItem[]> = {
    small: [
        {
            label: "main 1",
            children: [
                { label: "Child 1", url: "https://www.byzzer.com" },
                { label: "Child 2", url: "https://www.byzzer.com" },
                { label: "Child 3", url: "https://www.byzzer.com" }
            ]
        },
        { label: "Byzzer", url: "https://www.byzzer.com" }
    ],
    medium: [
        {
            label: "main 1",
            children: [
                { label: "Child 1", url: "https://www.byzzer.com" },
                { label: "Child 2", url: "https://www.byzzer.com" },
                { label: "Child 3", url: "https://www.byzzer.com" }
            ]
        },
        {
            label: "main 2",
            children: [
                { label: "Child 1", url: "https://www.byzzer.com" },
                { label: "Child 2", url: "https://www.byzzer.com" },
                {
                    label: "Child 3",
                    children: [
                        { label: "Child 1", url: "https://www.byzzer.com" },
                        { label: "Child 2", url: "https://www.byzzer.com" },
                        { label: "Child 3", url: "https://www.byzzer.com" }
                    ]
                }
            ]
        },
        { label: "Byzzer", url: "https://www.byzzer.com" },
        { label: "Google", url: "https://google.com" }
    ],
    large: [
        {
            label: "main 1",
            children: [
                { label: "Child 1", url: "https://www.byzzer.com" },
                { label: "Child 2", url: "https://www.byzzer.com" },
                { label: "Child 3", url: "https://www.byzzer.com" }
            ]
        },
        {
            label: "main 2",
            children: [
                { label: "Child 1", url: "https://www.byzzer.com" },
                { label: "Child 2", url: "https://www.byzzer.com" },
                {
                    label: "Child 3",
                    children: [
                        { label: "Child 1", url: "https://www.byzzer.com" },
                        { label: "Child 2", url: "https://www.byzzer.com" },
                        { label: "Child 3", url: "https://www.byzzer.com" },
                        {
                            label: "main 2",
                            children: [
                                { label: "Child 1", url: "https://www.byzzer.com" },
                                { label: "Child 2", url: "https://www.byzzer.com" },
                                {
                                    label: "Child 3",
                                    children: [
                                        { label: "Child 1", url: "https://www.byzzer.com" },
                                        { label: "Child 2", url: "https://www.byzzer.com" },
                                        { label: "Child 3", url: "https://www.byzzer.com" },
                                        {
                                            label: "main 2",
                                            children: [
                                                { label: "Child 1", url: "https://www.byzzer.com" },
                                                { label: "Child 2", url: "https://www.byzzer.com" },
                                                {
                                                    label: "Child 3",
                                                    children: [
                                                        { label: "Child 1", url: "https://www.byzzer.com" },
                                                        { label: "Child 2", url: "https://www.byzzer.com" },
                                                        { label: "Child 3", url: "https://www.byzzer.com" },
                                                        {
                                                            label: "main 2",
                                                            children: [
                                                                { label: "Child 1", url: "https://www.byzzer.com" },
                                                                { label: "Child 2", url: "https://www.byzzer.com" },
                                                                {
                                                                    label: "Child 3",
                                                                    children: [
                                                                        { label: "Child 1", url: "https://www.byzzer.com" },
                                                                        { label: "Child 2", url: "https://www.byzzer.com" },
                                                                        { label: "Child 3", url: "https://www.byzzer.com" },
                                                                        {
                                                                            label: "main 2",
                                                                            children: [
                                                                                { label: "Child 1", url: "https://www.byzzer.com" },
                                                                                { label: "Child 2", url: "https://www.byzzer.com" },
                                                                                {
                                                                                    label: "Child 3",
                                                                                    children: [
                                                                                        { label: "Child 1", url: "https://www.byzzer.com" },
                                                                                        { label: "Child 2", url: "https://www.byzzer.com" },
                                                                                        { label: "Child 3", url: "https://www.byzzer.com" }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        { label: "Byzzer", url: "https://www.byzzer.com" },
        { label: "Google", url: "https://google.com" },
        {
            label: "main 2",
            children: [
                { label: "Child 1", url: "https://www.byzzer.com" },
                { label: "Child 2", url: "https://www.byzzer.com" },
                {
                    label: "Child 3",
                    children: [
                        { label: "Child 1", url: "https://www.byzzer.com" },
                        { label: "Child 2", url: "https://www.byzzer.com" },
                        { label: "Child 3", url: "https://www.byzzer.com" },
                        {
                            label: "main 2",
                            children: [
                                { label: "Child 1", url: "https://www.byzzer.com" },
                                { label: "Child 2", url: "https://www.byzzer.com" },
                                {
                                    label: "Child 3",
                                    children: [
                                        { label: "Child 1", url: "https://www.byzzer.com" },
                                        { label: "Child 2", url: "https://www.byzzer.com" },
                                        { label: "Child 3", url: "https://www.byzzer.com" },
                                        {
                                            label: "main 2",
                                            children: [
                                                { label: "Child 1", url: "https://www.byzzer.com" },
                                                { label: "Child 2", url: "https://www.byzzer.com" },
                                                {
                                                    label: "Child 3",
                                                    children: [
                                                        { label: "Child 1", url: "https://www.byzzer.com" },
                                                        { label: "Child 2", url: "https://www.byzzer.com" },
                                                        { label: "Child 3", url: "https://www.byzzer.com" }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
