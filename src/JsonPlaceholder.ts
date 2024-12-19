import { NetworkUtils } from './utils/complex';

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export class CommentService {
    private static readonly BASE_URL = 'https://jsonplaceholder.typicode.com/comments';

    async getCommentNames(postId: number = 1): Promise<string[]> {
        try {
            const url = `${CommentService.BASE_URL}?postId=${postId}`;
            const response = await NetworkUtils.fetchWithCache<Comment[]>(url);
            
            return response.map(comment => comment.name);
        } catch (error) {
            console.error('获取数据时发生错误：', error);
            return [];
        }
    }
} 