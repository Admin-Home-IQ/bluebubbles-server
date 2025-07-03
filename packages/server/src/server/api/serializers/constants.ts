import path from 'path';
import { readFileSync } from 'fs';

export const DEFAULT_ATTACHMENT_CONFIG = {
    convert: true,
    loadData: false,
    loadMetadata: true,
    includeMessageGuids: false
};

export const DEFAULT_MESSAGE_CONFIG = {
    parseAttributedBody: false,
    parseMessageSummary: false,
    parsePayloadData: false,
    loadChatParticipants: true,
    includeChats: true,
    enforceMaxSize: false,
    // Max payload size is 4000 bytes
    // https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages
    maxSizeBytes: 4000
};

export const DEFAULT_CHAT_CONFIG = {
    includeParticipants: true,
    includeMessages: false
};

export const DEFAULT_HANDLE_CONFIG = {
    includeChats: false,
    includeMessages: false
};

const homeDir = process?.env?.HOME ?? process?.env?.HOMEPATH ?? process?.env?.USERPROFILE;
export const USER_CONFIG_FILE = JSON.parse(readFileSync(path.join(homeDir, 'user_config.json'), 'utf8'));

