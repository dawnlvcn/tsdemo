import { NetworkUtils } from './utils/complex';

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

async function printCommentNames() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/comments?postId=1';
        const response = await NetworkUtils.fetchWithCache<Comment[]>(url);
        
        console.log('评论标题列表：');
        response.forEach((comment, index) => {
            console.log(`${index + 1}. ${comment.name}`);
        });
    } catch (error) {
        console.error('获取数据时发生错误：', error);
    }
}

// 执行函数
printCommentNames(); 