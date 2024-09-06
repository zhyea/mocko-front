<template>
	<div class="table-container">

		<div class="table-top">
			<div class="table-header">
				<div class="table-search" style="display: flex">
					<el-input v-model="keywordForm"
					          class="w-50 m-2"
					          placeholder="关键字"
					          :prefix-icon="Search"
					          @change="loadMethodsData"/>
				</div>
				<div class="table-button">
					<el-button type="primary" @click="create">添加产品管理员</el-button>
				</div>
			</div>

			<div class="table-body">
				<el-table :data="methodListData" border style="width: 100%">
					<el-table-column type="index" width="50"/>
					<el-table-column prop="typeFullName" label="类名"/>
					<el-table-column prop="typeAlias" label="类描述"/>
					<el-table-column prop="methodName" label="方法名"/>
					<el-table-column prop="methodAlias" label="方法描述"/>
					<el-table-column prop="responseType" label="返回类型"/>
					<el-table-column prop="lastRequestTime" label="上次调用时间"/>

					<el-table-column label="操作" width="150">
						<template #default="scope">
							<el-button type="success" size="small" @click="handleEdit(scope.row)">
								编辑
							</el-button>
							<el-button type="danger" size="small" @click="handleDelete(scope.row)">
								删除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>

		<div class="table-footer">
			<el-pagination pager-count=5
			               :page-size="pageData.pageSize"
			               :current-page="pageData.pageNo"
			               :total="pageData.total"
			               @change="pageChange"
			               layout="prev, pager, next"/>
		</div>
	</div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue'
import {Search} from '@element-plus/icons-vue'
import {findMethodsInPage} from '@/api/type'
import {useRouter, useRoute} from 'vue-router';

const route = useRoute();


// 搜索数据
const keywordForm = ref({
	// 关键字
	keyword: ''
})


// 分页数据
const pageData = ref({
	// 当前页
	pageNo: 1,

	pageSize: 10,
	// 记录总数
	total: 0,
})


// 方法列表数据
const methodListData = ref([])


// 加载方法数据
function loadMethodsData() {
	let keyword = keywordForm.value.keyword
	let appId = route.query.appId
	let pageNo = pageData.value.pageNo
	let pageSize = pageData.value.pageSize
	findMethodsInPage({
		'appId': appId,
		'keyword': keyword,
		'pageNo': pageNo,
		'pageSize': pageSize,
	}).then(response => {
		methodListData.value = response.data.data
	})
}


const pageChange = async (val) => {
	console.log(val)
	loadMethodsData()
}


onMounted(() => {
	loadMethodsData()
})


function handleEdit(record) {
	console.log(record)
}


function handleDelete(record) {
	console.log(record)
}

</script>

<style lang="less" scoped>

</style>
